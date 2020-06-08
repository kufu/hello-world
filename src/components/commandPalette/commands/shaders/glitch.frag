precision mediump float;
uniform float u_time;
uniform sampler2D u_image;
uniform vec2 u_textureSize;
varying vec2 v_textureCoord;

float floatRandom(float num) {
    return fract(sin(num) * 1e4);
}

float vectorRandom(vec2 st, float num) {
    return fract(sin(dot(st.xy, vec2(43.4343 + num, 15.1958))) * 7843.4738439);
}

vec2 lineNoize(vec2 st, vec3 color, float timeOffset, float height, float speed, float frequency, float gap) {
    vec2 onePixel = vec2(1.0, 1.0) / u_textureSize;
    float sinWave = fract((u_time + timeOffset) * speed) * frequency * (1.0 + onePixel.y * height) - (onePixel.y * height);
    if (sinWave < st.y && st.y < (sinWave + onePixel.y * height)) {
        st = vec2(st.x + onePixel.x * gap, st.y);
    }
    return st;
}

vec2 squareNoise(vec2 st, vec3 color, float speed) {
    float floorTime = floor(u_time * speed);
    vec2 glitchMaxSizeRatio = u_textureSize * 0.05;
    vec2 glitchMaxSize = glitchMaxSizeRatio / u_textureSize;
    float positionX = floatRandom(floorTime);
    float positionY = floatRandom(floorTime + 1.0);
    float rectWidth = floatRandom(floorTime + 2.0) * glitchMaxSize.x;
    float rectHeight = floatRandom(floorTime + 3.0) * glitchMaxSize.y;
    float rectLeft = positionX - rectWidth;
    float rectRight = positionX + rectWidth;
    float rectTop = positionY - rectHeight;
    float rectBottom = positionY + rectHeight;

    if (rectLeft < st.x && st.x < rectRight && rectTop < st.y && st.y < rectBottom) {
        float fromRectX = floatRandom(floorTime + 4.0) * 0.9;
        float fromRectY = floatRandom(floorTime + 5.0) * 0.9;
        float movedX = st.x + fromRectX - positionX;
        float movedY = st.y + fromRectY - positionY;
        st = vec2(movedX, movedY);
    }
    return st;
}

vec2 distortionNoize(vec2 st) {
    float period = 1.0;
    float interval = 5.0;
    float duration = 1.5;
    float timeVal = interval - mod(u_time, interval);
    float amplitude = sin(smoothstep(interval - duration, interval, timeVal));
    float move = timeVal * 50.0;
    float strength = 8.0;

    float noiseVal = (st.y * u_textureSize.y + move) / period;
    float i = floor(noiseVal);
    float f = fract(noiseVal);
    float noiseX = mix(floatRandom(i), floatRandom(i + 1.0), smoothstep(0.0, 1.0, f)) * 2.0 * amplitude - amplitude;
    noiseX = noiseX * strength;
    st = vec2(st.x + noiseX / (u_textureSize.x / period), st.y);
    return st;
}

vec2 rattlingNoise(vec2 st, float shakeStrength) {
    float interval = 5.0;
    float duration = 1.5;
    float timeVal = interval - mod(u_time, interval);
    float timeStrength = smoothstep(interval - duration, interval, timeVal);
    vec2 rattlingPosition = vec2(timeStrength * shakeStrength) * vec2(vectorRandom(vec2(u_time), 0.0) * 2.0 - 1.0, vectorRandom(vec2(u_time * 2.0), 0.0) * 2.0 - 1.0) / u_textureSize;
    return st + rattlingPosition;
}

vec2 shiveringNoise(vec2 st, vec2 onePixel) {
    float intensity = onePixel.x * 3.0;
    for (float i = 0.0; i < 1.0; i += 0.01) {
        if (i <= st.y && st.y <= i + 0.01) {
            st.x += floatRandom(u_time + i) * intensity;
        }
    }
    return st;
}

void main(void){
    vec2 st = v_textureCoord;
    vec3 color = vec3(1.0);
    vec2 onePixel = vec2(1.0, 1.0) / u_textureSize;

    st = distortionNoize(st);
    st = shiveringNoise(st, onePixel);
    st = rattlingNoise(st, 8.0);

    float squareNoiseSin = sin(u_time);
    if (0.98 < abs(squareNoiseSin)) {
        st = squareNoise(st, color, 15.0);
    }
    if (0.6 < abs(squareNoiseSin) && abs(squareNoiseSin) < 0.65) {
        st = squareNoise(st, color, 15.0);
    }

    st = lineNoize(st, color, 0.0, 6.0, 0.3, 4.3, 8.0);
    st = lineNoize(st, color, 0.3, 4.0, 0.4, 5.5, 8.0);
    st = lineNoize(st, color, 0.8, 5.0, 0.5, 8.0, 8.0);
    st = lineNoize(st, color, 0.8, 1.5, -0.3, 1.4, 8.0);

    vec2 redRattledSt = rattlingNoise(st, 18.0);
    float offset = 6.0;
    color =
        vec3(texture2D(u_image, redRattledSt + vec2(onePixel.x * offset, 0.0)).r, 0.0, 0.0) +
        vec3(0.0, texture2D(u_image, st + vec2(onePixel.x, 0.0)).g, 0.0) +
        vec3(0.0, 0.0, texture2D(u_image, st + vec2(onePixel.x * -offset, 0.0)).b);

    color -= vectorRandom(st, u_time) * 0.2;

    float opacity = 1.0;
    if (mod(st.y * u_textureSize.y, 4.0) < 2.0) {
        opacity = 0.9;
    }

    gl_FragColor = vec4(color, opacity);
}

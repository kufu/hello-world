precision mediump float;
uniform float u_time;
uniform sampler2D u_image;
uniform vec2 u_textureSize;
varying vec2 v_textureCoord;

float vectorRandom(vec2 st, float num) {
    return fract(sin(dot(st.xy, vec2(43.4343 + num, 15.1958))) * 7843.4738439);
}

float vectorRandom2(vec2 st) {
    return fract(sin(dot(st.xy, vec2(9.11, 16.23))) * 29.545);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = vectorRandom2(i);
    float b = vectorRandom2(i + vec2(1.0, 0.0));
    float c = vectorRandom2(i + vec2(0.0, 1.0));
    float d = vectorRandom2(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

vec2 normalizeSt(vec2 st) {
    vec2 normalizedSt = vec2(st * 2.0 - 1.0);
    // 大きい辺を基準にする
    if (u_textureSize.x > u_textureSize.y) {
        normalizedSt = vec2(normalizedSt.x, normalizedSt.y * (u_textureSize.y / u_textureSize.x));
    } else {
        normalizedSt = vec2(normalizedSt.x * (u_textureSize.x / u_textureSize.y), normalizedSt.y);
    }
    return normalizedSt;
}

vec3 neon() {
    vec2 st = v_textureCoord;

    // (-1,-1) (-1,0) (-1,1)
    // (0, -1) (0, 0) (0, 1)
    // (1, -1) (1, 0) (1, 1)
    vec3 pixel00 =   vec3(texture2D(u_image, st + (vec2(0, 0)   / u_textureSize)));
    vec3 pixel01 =   vec3(texture2D(u_image, st + (vec2(0, 1)   / u_textureSize)));
    vec3 pixel0n1 =  vec3(texture2D(u_image, st + (vec2(0, -1)  / u_textureSize)));
    vec3 pixel11 =   vec3(texture2D(u_image, st + (vec2(1, 1)   / u_textureSize)));
    vec3 pixeln10 =  vec3(texture2D(u_image, st + (vec2(-1, 0)  / u_textureSize)));
    vec3 pixeln1n1 = vec3(texture2D(u_image, st + (vec2(-1, -1) / u_textureSize)));
    vec3 pixel10 =   vec3(texture2D(u_image, st + (vec2(1, 0)   / u_textureSize)));
    vec3 pixeln11 =  vec3(texture2D(u_image, st + (vec2(-1, 1)  / u_textureSize)));
    vec3 pixel1n1 =  vec3(texture2D(u_image, st + (vec2(1, -1)  / u_textureSize)));

    vec3 edgeX =
    (pixel00 * vec3(0)) +
    (pixel01 * vec3(-2)) +
    (pixel0n1 * vec3(2)) +
    (pixel11 * vec3(-1)) +
    (pixel10 * vec3(0)) +
    (pixel1n1 * vec3(1)) +
    (pixeln10 * vec3(0)) +
    (pixeln11 * vec3(-1)) +
    (pixeln1n1 * vec3(1));
    vec3 edgeY =
    (pixel00 * vec3(0)) +
    (pixel01 * vec3(0)) +
    (pixel0n1 * vec3(0)) +
    (pixel11 * vec3(-1)) +
    (pixel10 * vec3(-2)) +
    (pixel1n1 * vec3(-1)) +
    (pixeln10 * vec3(2)) +
    (pixeln11 * vec3(1)) +
    (pixeln1n1 * vec3(1));
    edgeX = vec3(pow(edgeX.x, 2.0), pow(edgeX.y, 2.0), pow(edgeX.z, 2.0));
    edgeY = vec3(pow(edgeY.x, 2.0), pow(edgeY.y, 2.0), pow(edgeY.z, 2.0));
    vec3 neonColor = edgeX + edgeY;

    neonColor = vec3(
    sqrt(smoothstep(0.05, 0.6, neonColor.r)),
    sqrt(smoothstep(0.05, 0.6, neonColor.g)),
    sqrt(smoothstep(0.05, 0.6, neonColor.b))
    );

    return neonColor;
}

float stars(float minDensity, float maxDensity, float blinkSpeed, float randomFloat) {
    float densityWave = (sin(u_time * blinkSpeed) * 0.5 + 0.5);
    float density = minDensity + densityWave * (maxDensity - minDensity);
    float gradientDensity = density * (1.0 - v_textureCoord.y);
    return smoothstep(1.0 - gradientDensity, 1.0, vectorRandom(v_textureCoord, randomFloat));
}

float largeStars(float minDensity, float maxDensity, float blinkSpeed,float randomFloat) {
    float densityWave = (sin(u_time * blinkSpeed) * 0.5 + 0.5);
    float density = minDensity + densityWave * (maxDensity - minDensity);
    float gradientDensity = density * (1.0 - v_textureCoord.y);
    return smoothstep(1.0 - gradientDensity, 1.0, vectorRandom(floor(v_textureCoord * u_textureSize * 0.5), randomFloat));
}

float fbm (vec2 st) {
    float val = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rotation = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < 5; ++i) {
        val += a * noise(st);
        st = rotation * st * 2.0 + shift;
        a *= 0.5;
    }
    return val;
}

vec3 sky() {
    vec2 st = normalizeSt(v_textureCoord) * 3.0;
    vec3 color = vec3(0.0);
    vec2 fog = vec2(fbm(st), fbm(st));
    vec2 distortion = vec2(
    fbm( st + fog + vec2(1.7, 9.2) + 0.15 * u_time * 3.0),
    fbm( st + fog + vec2(8.3, 2.8) + 0.126 * u_time * 3.0)
    );
    float noise = fbm(st + distortion);
    color = mix(color, vec3(0.0, 0.01, 0.24), clamp(length(fog), 0.0, 1.0));
    color = mix(color, vec3(0.0, 0.0, 0.01), clamp(length(distortion.x), 0.0, 1.0));
    color = vec3((noise * noise * noise + 0.6 * noise * noise + 0.5 * noise) * color);
    return color;
}

void main(void){
    vec2 st = v_textureCoord;
    vec3 color = vec3(0.0, 0.0, 16.0) / 255.0;
    float opacity = 1.0;

    color += sky();
    color += neon();
    color += stars(0.0007, 0.0014, 3.0, 0.0);
    color += stars(0.0007, 0.001, 2.0, 0.1);
    color += stars(0.0006, 0.001, 4.3, 0.2);
    color += stars(0.0008, 0.0016, 2.0, 1.0) * vec3(1.0, 1.0, 0.7);
    color += stars(0.001, 0.002, 1.3, 1.1) * vec3(1.0, 1.0, 0.7);
    color += stars(0.001, 0.0015, 1.0, 2.0) * vec3(1.0, 0.6, 0.6);
    color += largeStars(0.002, 0.002, 1.0, -4.3);
    color += largeStars(0.002, 0.002, 1.0, 4.1) * vec3(1.0, 0.8, 0.8);

    gl_FragColor = vec4(color, opacity);
}

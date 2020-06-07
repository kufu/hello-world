attribute vec2 a_position;
attribute vec2 a_textureCoord;
uniform vec2 u_resolution;
varying vec2 v_textureCoord;

void main(void){
    vec2 clipSpace = (a_position / u_resolution * 2.0) - 1.0;
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    v_textureCoord = a_textureCoord;
}

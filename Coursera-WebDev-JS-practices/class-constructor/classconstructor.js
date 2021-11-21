class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `(${this.innerRGB()}, ${a})`;
    }

}

const region = new Color(125, 125, 125);
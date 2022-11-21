const canvas = document.querySelector('canvas');
const cw = canvas.width;
const ch = canvas.height;

const ctx = canvas.getContext('2d');

// Shape
//* x: 0, y: center
//? w: 50, h: 50

class Smile {
    image = null;
    rect = {};

    constructor(w, h, source) {
        this.w = w;
        this.h = h;

        this.x = 0;
        this.y = (ch - this.h) / 2;

        this.image = new Image();
        this.image.src = source;
        this.image.addEventListener('load', () => {
            this.drawImage();
        });
    }

    saveRect() {
        this.rect = {
            x: this.x, y: this.y, w: this.w, h: this.h
        };
    }

    drawImage() {
        ctx.clearRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    moveRight() {
        this.saveRect()
        this.x += 2;
        if (this.x > (cw - this.w)) {
            this.x -= 2;
        }
    }
    moveLeft() {
        this.saveRect();
        this.x -= 2;
        if (this.x < 0) {
            this.x += 2;
        }
    }

    increase() {
        this.saveRect();
        this.w += 2;
        this.h += 2;
    }
    decrease() {
        this.saveRect();
        this.w -= 2;
        this.h -= 2;
    }
}

const smile = new Smile(50, 50, 'smile.svg');
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
        smile.moveRight();
    }
    if (e.key === 'ArrowLeft') {
        smile.moveLeft();
    }
    if (e.key === 'ArrowUp') {
        smile.increase();
    }
    if (e.key === 'ArrowDown') {
        smile.decrease();
    }
    smile.drawImage();
});
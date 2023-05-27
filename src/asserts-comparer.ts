import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef } from "lit/directives/ref.js";

@customElement("asserts-comparer")
export class AssertsComparer extends LitElement {
  static styles = css`
    :host {
      overflow: hidden;
    }

    * {
      display: flex;
      width: 100%;
    }

    .blend,
    .split {
      position: relative;
      min-height: 100px;
    }
    .blend > *,
    .split > * {
      position: absolute;
    }
    .right {
      overflow: hidden;
      pointer-events: none;
    }
    .split > .right {
      transform: translateX(var(--offsetX));
      border-left: dashed 1px white;
      margin-left: -1px;
    }

    .split > .right > * {
      transform: translateX(var(---offsetX));
    }

    .blend > .right {
      opacity: var(--opacity);
    }
  `;

  inputRef = createRef();

  @property() private mode = "two-up";

  @state() private offsetX = 0;
  @state() private opacity = 0;

  move(event) {
    this.offsetX = event.offsetX;
    this.opacity = event.offsetX / this.renderRoot.firstElementChild!.clientWidth;
  }

  render() {
    const { mode, offsetX, opacity } = this;
    return html`
      <div
        class="${mode}"
        @mousemove=${this.move}
        style="--offsetX:${offsetX}px;---offsetX:${-offsetX}px;--opacity: ${opacity}"
      >
        <slot name="one"></slot>
        <div class="right">
          <slot name="two"></slot>
        </div>
      </div>
    `;
  }
}

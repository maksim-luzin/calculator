<template>
  <main class="calculator">
    <DisplayCurrentCalculation
      class="show-current-calculation"
      key="calculation"
    />
    <DisplayCurrentValue class="show-current-value" key="value" />
    <div class="show"></div>
    <ACButton :name="ButtonNames.AC" class="ac" />
    <UndoButton class="undo" />
    <RedoButton class="redo" />
    <MathOpButton :name="ButtonNames.Divide" class="divide" />
    <DigitalButton :name="ButtonNames.Seven" class="seven" />
    <DigitalButton :name="ButtonNames.Eight" class="eight" />
    <DigitalButton :name="ButtonNames.Nine" class="nine" />
    <MathOpButton :name="ButtonNames.Multiply" class="multiply" />
    <DigitalButton :name="ButtonNames.Four" class="four" />
    <DigitalButton :name="ButtonNames.Five" class="five" />
    <DigitalButton :name="ButtonNames.Six" class="six" />
    <MathOpButton :name="ButtonNames.Minus" class="minus" />
    <DigitalButton :name="ButtonNames.One" class="one" />
    <DigitalButton :name="ButtonNames.Two" class="two" />
    <DigitalButton :name="ButtonNames.Three" class="three" />
    <MathOpButton :name="ButtonNames.Plus" class="plus" />
    <ChangeSignButton :name="ButtonNames.Sign" class="sign" />
    <DigitalButton :name="ButtonNames.Null" class="null" />
    <DotButton class="dot" />
    <MathOpButton :name="ButtonNames.Equals" class="equals" />
  </main>
</template>

<script setup lang="ts">
import DisplayCurrentCalculation from "./DisplayCurrentCalculation.vue";
import DisplayCurrentValue from "./DisplayCurrentValue.vue";
import ACButton from "./ACButton.vue";
import DigitalButton from "./DigitalButton.vue";
import MathOpButton from "./MathOpButton.vue";
import ChangeSignButton from "./ChangeSignButton.vue";
import DotButton from "./DotButton.vue";
import UndoButton from "./UndoButton.vue";
import RedoButton from "./RedoButton.vue";
import { ButtonNames } from "@/general/enums";
</script>

<style lang="scss">
.calculator {
  border: 1px solid darkred;

  width: calc(0.7 * 90vh);
  height: 90vh;

  display: grid;

  grid-template-columns: [left-edge] 4% [ac-sign-start] 20% [ac-sign-end] 4% [undo-0-start] 20% [undo-0-end] 4% [redo-dot-start] 20% [redo-dot-end] 4%[divide-equals-start] 20% [divide-equals-end] 4% [right-edge];
  grid-template-rows: [top-edge] 3% [show-current-calculation-start] 7% [show-current-calculation-end] 4% [show-current-value-start] 10% [show-current-value-end] 5% [AC-divide-start] 11% [AC-divide-end] 3% [seven-multiply-start] 11% [seven-multiply-end] 3% [four-minus-start] 11% [four-minus-end] 3% [one-plus-start] 11% [one-plus-end] 3% [sign-equals-start] 11% [sign-equals-end] 3% [bottom-edge];

  .show {
    border: 1px solid darkred;
    grid-column-start: ac-sign-start;
    grid-column-end: divide-equals-end;
    grid-row-start: show-current-calculation-start;
    grid-row-end: show-current-value-end;
  }

  .show-current-calculation {
    grid-column-start: ac-sign-start;
    grid-column-end: divide-equals-end;
    grid-row-start: show-current-calculation-start;
    grid-row-end: show-current-calculation-end;
  }

  .show-current-value {
    grid-column-start: ac-sign-start;
    grid-column-end: divide-equals-end;
    grid-row-start: show-current-value-start;
    grid-row-end: show-current-value-end;
  }

  .ac {
    grid-column-start: ac-sign-start;
    grid-column-end: ac-sign-end;
    grid-row-start: AC-divide-start;
    grid-row-end: AC-divide-end;
  }

  .undo {
    grid-column-start: undo-0-start;
    grid-column-end: undo-0-end;
    grid-row-start: AC-divide-start;
    grid-row-end: AC-divide-end;
  }

  .redo {
    grid-column-start: redo-dot-start;
    grid-column-end: redo-dot-end;
    grid-row-start: AC-divide-start;
    grid-row-end: AC-divide-end;
  }

  .divide {
    grid-column-start: divide-equals-start;
    grid-column-end: divide-equals-end;
    grid-row-start: AC-divide-start;
    grid-row-end: AC-divide-end;
  }

  .seven {
    grid-column-start: ac-sign-start;
    grid-column-end: ac-sign-end;
    grid-row-start: seven-multiply-start;
    grid-row-end: seven-multiply-end;
  }

  .eight {
    grid-column-start: undo-0-start;
    grid-column-end: undo-0-end;
    grid-row-start: seven-multiply-start;
    grid-row-end: seven-multiply-end;
  }

  .nine {
    grid-column-start: redo-dot-start;
    grid-column-end: redo-dot-end;
    grid-row-start: seven-multiply-start;
    grid-row-end: seven-multiply-end;
  }

  .multiply {
    grid-column-start: divide-equals-start;
    grid-column-end: divide-equals-end;
    grid-row-start: seven-multiply-start;
    grid-row-end: seven-multiply-end;
  }

  .four {
    grid-column-start: ac-sign-start;
    grid-column-end: ac-sign-end;
    grid-row-start: four-minus-start;
    grid-row-end: four-minus-end;
  }

  .five {
    grid-column-start: undo-0-start;
    grid-column-end: undo-0-end;
    grid-row-start: four-minus-start;
    grid-row-end: four-minus-end;
  }

  .six {
    grid-column-start: redo-dot-start;
    grid-column-end: redo-dot-end;
    grid-row-start: four-minus-start;
    grid-row-end: four-minus-end;
  }

  .minus {
    grid-column-start: divide-equals-start;
    grid-column-end: divide-equals-end;
    grid-row-start: four-minus-start;
    grid-row-end: four-minus-end;
  }

  .one {
    grid-column-start: ac-sign-start;
    grid-column-end: ac-sign-end;
    grid-row-start: one-plus-start;
    grid-row-end: one-plus-end;
  }

  .two {
    grid-column-start: undo-0-start;
    grid-column-end: undo-0-end;
    grid-row-start: one-plus-start;
    grid-row-end: one-plus-end;
  }

  .three {
    grid-column-start: redo-dot-start;
    grid-column-end: redo-dot-end;
    grid-row-start: one-plus-start;
    grid-row-end: one-plus-end;
  }

  .plus {
    grid-column-start: divide-equals-start;
    grid-column-end: divide-equals-end;
    grid-row-start: one-plus-start;
    grid-row-end: one-plus-end;
  }

  .sign {
    grid-column-start: ac-sign-start;
    grid-column-end: ac-sign-end;
    grid-row-start: sign-equals-start;
    grid-row-end: sign-equals-end;
  }

  .null {
    grid-column-start: undo-0-start;
    grid-column-end: undo-0-end;
    grid-row-start: sign-equals-start;
    grid-row-end: sign-equals-end;
  }

  .dot {
    grid-column-start: redo-dot-start;
    grid-column-end: redo-dot-end;
    grid-row-start: sign-equals-start;
    grid-row-end: sign-equals-end;
  }

  .equals {
    grid-column-start: divide-equals-start;
    grid-column-end: divide-equals-end;
    grid-row-start: sign-equals-start;
    grid-row-end: sign-equals-end;
  }
}
</style>

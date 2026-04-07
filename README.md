# Produce Board Assignment

A small React + TypeScript assignment built with Vite.

The app shows a list of produce items on the left and two category columns on the right:

- `Fruit`
- `Vegetable`

Users can move items into the correct category, let them auto-return after 5 seconds, or return them immediately by clicking the item in the category column.

## Assignment Behavior

- The left panel shows the main item list.
- A search input filters the left list by item name.
- Clicking an item in the left list moves it to the matching category column immediately.
- Items stay in the category column for 5 seconds, then move back to the bottom of the left list.
- Clicking an item inside a category column returns it to the bottom of the left list immediately.

## Tech Stack

- React 19
- TypeScript
- Vite
- Zustand for state management
- Lucide React for lightweight icons

## Project Structure

The main implementation is organized with a feature-based structure:

```text
src/
  App.tsx
  main.tsx
  index.css
  data/
    example.ts
  features/
    produce-board/
      components/
      hooks/
      store/
      constants.ts
      types.ts
      utils.ts
      produce-board.css
      index.ts
```

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start the development server

```bash
pnpm dev
```

Then open the local URL shown in the terminal.

## Available Scripts

### Run development server

```bash
pnpm dev
```

### Build for production

```bash
pnpm build
```

### Run lint checks

```bash
pnpm lint
```

### Preview the production build

```bash
pnpm preview
```

## Implementation Notes

- State is managed with Zustand in [src/features/produce-board/store/useProduceBoardStore.ts](/Users/heinmyatthu/Documents/projects/ss-fe-assignment/src/features/produce-board/store/useProduceBoardStore.ts).
- Timer behavior is isolated in [src/features/produce-board/hooks/useTimer.ts](/Users/heinmyatthu/Documents/projects/ss-fe-assignment/src/features/produce-board/hooks/useTimer.ts).
- The feature entry point is [src/features/produce-board/components/ProduceBoard.tsx](/Users/heinmyatthu/Documents/projects/ss-fe-assignment/src/features/produce-board/components/ProduceBoard.tsx).
- The sample dataset comes from [src/data/example.ts](/Users/heinmyatthu/Documents/projects/ss-fe-assignment/src/data/example.ts).

## Notes for Review

- The implementation focuses on clear separation of responsibilities instead of putting all logic in `App.tsx`.
- The UI is intentionally simple and restrained.
- Build and lint both pass successfully.

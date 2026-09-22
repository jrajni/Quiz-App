import { instructions } from "./constant";

export default function Instructions() {
  return (
    <div>
      <h1>Instructions</h1>
      <ul>
        {instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ul>
    </div>
  );
}

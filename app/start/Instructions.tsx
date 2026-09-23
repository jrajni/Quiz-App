import { instructions } from "./constant";

export default function Instructions() {
  return (
    <div className="my-2">
      <h5 className="text-lg font-bold my-2">Instructions</h5>
      <ul className="list-disc list-inside">
        {instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ul>
    </div>
  );
}

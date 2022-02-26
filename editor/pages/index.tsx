import { useState } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";

export default function Home() {
  // toggle markdown preview
  const [preview, setPreview] = useState(false);
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState<Descendant[]>([
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]);

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <div className="text-white container pt-24 px-48 mx-auto">
        <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue)}>
          <Editable />
        </Slate>
      </div>
    </div>
  );
}

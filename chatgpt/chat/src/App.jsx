import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
const API_KEY = "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";

const configuration = new Configuration({
  apiKey: API_KEY,
});
function App() {
  const [value, setValue] = useState("");
  const [text, setText] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let openai = new OpenAIApi(configuration);
    console.log(value);
    try {
      const completion = await openai.createCompletion({
        model: "text-ada-001",
        prompt: value,

        max_tokens: 1024,
        n: 1,
        temperature: 0.5,
      });
      console.log(completion.data.choices[0]);
      setText((initialState) => [
        ...initialState,
        completion.data.choices[0].text,
      ]);

      console.log(text);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="bg-[#000] h-[100px] w-100 text-white ">
      <h1 className="text-center text-3xl pt-2">Chat</h1>
      <hr className="text-white" />

      <div className="flex justify-center flex-col items-center space-y-4">
        {text?.map((t) => {
          return (
            <>
              <p className="text-center">{t}</p>
              <hr className="text-white" />
            </>
          );
        })}

        <p className="text-center h-auto"></p>

        <form className="flex justify-center flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            className="p-4 rounded-md text-[#000]"
            placeholder="enter prompt"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button
            className="mt-4 font-bold text-[#000] bg-red-500 py-2 rounded-md hover:bg-slate-900 hover:text-white transition-all"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

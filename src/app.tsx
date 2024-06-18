import { MusicDynamicIsland } from "./music/music"

function App() {
  return (
    <div className="grid w-screen h-screen p-2 lg:p-9">
      <div className="flex flex-col w-full max-w-lg gap-6 mx-auto">
        <div className="flex justify-center flex-1">
          <MusicDynamicIsland />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-neutral-700">
            dynamic island by
            {" "}
            <a href="https://github.com/monodyle/" target="_blank" rel="noopener noreferrer" className="underline decoration-dashed hover:text-purple-500 decoration-neutral-300">monodyle</a>
          </p>
          <p className="text-sm text-neutral-700">
            <a href="https://github.com/monodyle/dynamic-island" target="_blank" rel="noopener noreferrer" className="underline decoration-dashed hover:text-purple-500 decoration-neutral-300">github</a>
            ・
            <a href="https://ko-fi.com/monodyle" target="_blank" rel="noopener noreferrer" className="underline decoration-dashed hover:text-purple-500 decoration-neutral-300">buy me a coffee</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

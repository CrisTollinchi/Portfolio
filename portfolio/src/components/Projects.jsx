import Title from "./Title"

const Projects = () => {
    return(
        <div className="p-2">
           <Title titleContent="Projects"/>
           <div className="flex flex-wrap gap-1 m-2">
            <div className="w-24 h-24 bg-amber-400">Project 1</div>
            <div className="w-24 h-24 bg-red-500">Project 2</div>
            <div className="w-24 h-24 bg-blue-400">Project 3</div>
            <div className="w-24 h-24 bg-purple-400">Project 4</div>
           </div>
        </div>
    )
}
export default Projects
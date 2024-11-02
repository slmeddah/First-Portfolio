import Software from './Software'
import Languages from './languages';

const Skills=()=>{
    return(
        <div className="flex flex-col items-center justify-start gap-[10px] w-[80%]" >
            <h1 className="text-2xl font-bold mb-4">Skills</h1>
        <div className="flex flex-col lg:flex-row w-f items-center justify-center gap-[20%]">
            <div className="w-[40%] flex flex-col justify-start h-f">
            <h2  className="text-xl font-semibold mb-4">Technical skills</h2>
            <Software  />
            </div>
            <div className="w-[40%] flex flex-col justify-start  ">
            <h2  className="text-xl font-semibold mb-4">Languages</h2>
            <Languages  />
            </div>

        </div>
        </div>
    )


}
export default Skills;
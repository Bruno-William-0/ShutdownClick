import { exec } from "child_process";



class Commands
{
static async shutdown(){
exec('shutdown -s -t 0', (error, stdout, stderr) => {
    if(error){
            console.log(`Erro ${error.message}`);
            return;
    }
    console.log(`${stdout}`)
}
);
}

}

export default Commands;

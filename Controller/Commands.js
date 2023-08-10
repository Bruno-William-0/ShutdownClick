import { exec } from "child_process";
import { stderr, stdout } from "process";
import { StringDecoder } from "string_decoder";



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

static async reboot(){
    exec('shutdown -r', (error, stdout, stderr) =>{
    if(error){
        console.log(`Erro: ${error.message}`)
        return
    }
    })
}


}

export default Commands;

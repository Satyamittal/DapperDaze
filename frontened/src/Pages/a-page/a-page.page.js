

// All add components will be displayed here...
import { A_component } from "./a-component/a-component";
import { B_component } from "./b-component/b-component";
import { C_component } from "./c-component/c-component";
import { D_component } from "./d-component/d-component";

export function Add_page()
{
    return (

        <>
            <C_component/>
            <A_component/>
            <B_component/>
            <D_component/>
        </>
    );
}
import { useState } from "react"

export default function Form({inputs}){
    function handleSubmit(event){
        event.preventDefault()

    }

    return (
        <>
        <form>
            <div className="formBody">
                {inputs.map(e => (
                    <div className="formSection" key={e.name}>
                        <label>{e.label}</label>
                        <input name={e.name} type={e.type}></input>
                    </div>
                ))}
            </div>
            <button type="submit" onClick={handleSubmit}>Select</button>
        </form>
        </>
    )
}
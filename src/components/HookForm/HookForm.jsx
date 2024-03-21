import useInputState from "../../hooks/useinputState";

const HookForm = () => {
    const [name, handleNameChange] = useInputState('Riyaz');

    const handleSubmit = e => {
        console.log('form data', name);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text" name="phone" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;
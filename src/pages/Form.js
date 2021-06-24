import { useState, useEffect } from 'react';

const Form = ({ initialTodo, history, handleSubmit, buttonLabel }) => {
    const [formData, setFormData] = useState(initialTodo);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmission = (e) => {
        e.preventDefault();
        handleSubmit(formData);
        history.push('/');
    };

    useEffect(() => {
        if (history.location.pathname === '/new') {
            setFormData({
                subject: '',
                details: '',
            });
        }
    }, [history.location.pathname]);

    return (
        <form onSubmit={(event) => handleSubmission(event)}>
            <input
                type="text"
                value={formData.subject}
                name="subject"
                placeholder="subject"
                onChange={(event) => handleChange(event)}
            />
            <input
                type="text"
                value={formData.details}
                name="details"
                placeholder="details"
                onChange={(event) => handleChange(event)}
            />
            <button type="submit">{buttonLabel}</button>
        </form>
    );
};
export default Form;

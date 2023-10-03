import styled from "styled-components";
import devices  from "./MediaQuery";
const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 15%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

function ContactForm() {
    return (
        <FormContainer id="contact">
            <div>
                <h2>Contacto</h2>
                <Form>
                    <input type="text" placeholder="Nombre: " />
                    <input type="email" placeholder="Email: " />
                    <textarea placeholder="Mensaje..."></textarea>
                    <button type="submit">Enviar</button>
                </Form>
            </div>
        </FormContainer>
    );
}

export default ContactForm;
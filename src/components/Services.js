import styled from "styled-components";

const ServicesList = styled.ul`
    list-style-type: none;
`;

function Services() {
    const services = [
        'Servicio 1',
        'Servicio 2',
        'Servicio 3',
        'Servicio 4',
        'Servicio 5',
        'Servicio 6',
        'Servicio 7',
        'Servicio 8',
    ];

    return (
        <div id="services">
            <h2>Servicios</h2>
            <ServicesList>
                {services.map((service, index) => (
                    <li key={index} >{service}</li>
                ))}
            </ServicesList>
        </div>

    );
}

export default Services;
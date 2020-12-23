import styled from '@emotion/styled';

const DivHeader = styled.div`
    background-color: #26C6DA;
    padding: 1rem;
    color: white;
    text-align: center;
`;

const TituloHeader = styled.h1`
    font-family: 'Slabo 27px';
`;

const Header = ({titulo}) => {
    return (
        <DivHeader>
            <TituloHeader>{titulo}</TituloHeader>
        </DivHeader>

    )
}

export default Header;
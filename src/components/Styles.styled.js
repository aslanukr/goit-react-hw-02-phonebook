import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;

  font-size: 40px;
  color: #010101;
`;

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 35px;
  font-weight: 600;
  user-select: none;
  color: rgba(66, 137, 254, 255);
  text-shadow: 1px 2px 3px #063970;

  @media screen and (min-width: 568px) {
    font-size: 50px;
  }
`;

export const Icon = styled.img`
  width: 90px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin: 0 auto;
  max-width: 500px;
  margin-top: 30px;
  font-size: 20px;

  user-select: none;
`;

export const FormLabel = styled.label`
  display: block;
  width: 100%;
  margin-top: 30px;
  font-size: 15px;
  font-weight: 600;
  color: rgba(66, 137, 254, 255);
`;

export const Input = styled.input`
  width: 100%;

  font-size: 20px;
  font-weight: 600;
  padding: 5px 5px;

  outline: none;
  border: none;
  border-bottom: 1px solid rgba(66, 137, 254, 255);
  &:hover,
  &:focus {
    margin: -2px;
    border: 3px solid transparent;
    border-bottom: 3px solid rgba(66, 137, 254, 255);
  }
`;

export const AddBtn = styled.button`
  max-width: 200px;
  font-size: 20px;

  font-weight: 600;
  color: rgba(66, 137, 254, 255);
  padding: 10px 10px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 3px solid rgba(66, 137, 254, 255);
  scale: 1;
  transition: background-color, scale 250ms ease-in;

  &:hover,
  &:focus {
    background-color: rgba(66, 137, 254, 255);
    color: white;
    scale: 1.01;
    box-shadow: 1px 2px 3px #063970;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  flex-wrap: wrap;
  margin-top: 30px;
  max-width: 700px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const SectionTitle = styled.h2`
  display: block;
  user-select: none;
  font-size: 30px;
  font-weight: 600;
  color: rgba(66, 137, 254, 255);
`;

export const FilterInput = styled.input`
  font-size: 18px;
  margin-left: auto;
  padding: 2px 2px;
  user-select: none;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(66, 137, 254, 255);
  &:hover,
  &:focus {
    margin-bottom: -2px;
    border-bottom: 3px solid rgba(66, 137, 254, 255);
  }

  @media screen and (min-width: 568px) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: start;
  margin: 0 auto;
  max-width: 700px;
  margin-top: 30px;
`;

export const ContactItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  margin: 0 auto;
  font-size: 15px;
  @media screen and (min-width: 568px) {
    font-size: 25px;
  }
`;

export const DeleteBtn = styled.button`
  max-width: 100px;
  font-size: 15px;
  color: red;
  background-color: #ffffff;
  border: none;
`;

export const PhoneWrapper = styled.a`
  margin-left: auto;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const Info = styled.p`
  font-size: 25px;
`;

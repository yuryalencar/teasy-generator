import styled from 'styled-components'

export const FormGroup = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    box-sizing: border-box;
    display: flex;
    margin: 10px;
`;

export const InputGroup = styled.div`
    width: 100%;
    display: flex;
    border-collapse: separate;
    box-sizing: border-box;
    
    .form-control{
      background-color: #fff;
      background-image: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      height: 34px;
      padding-left: 35px;
      padding-right: 10px;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      width: 100%;
    }

    :focus{
      .input{
        border-color: #66afe9;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
        outline: 0;
      }
    }
    select, input {
      font-size: 15px;
    }
`;

export const InputIcone = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    position: relative;
    width: 40px;
    margin-right: -30px;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 04px;
    color: #224140;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    text-align: center;

     svg{
      width: 17px;
      height: 17px;
    }
`;

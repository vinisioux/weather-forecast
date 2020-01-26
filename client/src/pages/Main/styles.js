import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    /* margin-bottom: 50px; */
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 5px;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin: 40px 0 10px;
      text-transform: capitalize;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      select {
        width: 120px;
      }
    }
  }
`;

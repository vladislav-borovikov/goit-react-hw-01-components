import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  justify-content: space-between;
  width: 300px;
  background-color: grey;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5%;
`;
export const ImegProfil = styled.img`
width: 70px;
hight; 100px;
border-radius: 50%;
border-color: red;
border-width: 2px;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0px;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

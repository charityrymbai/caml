import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BgDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
`;
const OptPage = () => {
  const navigate = useNavigate();

  return (
    <BgDiv className=" gap-24">
      <button onClick={() => navigate("/lurn")} className="mt-40 text-3xl font-anton bg-white w-1/4 h-1/4 border-black border-2 rounded-xl hover:shadow-black shadow-lg">
        Use AI Assistant
      </button>
      <button onClick={() => navigate("/filter")} className="mt-40 text-3xl font-anton bg-white w-1/4 h-1/4 border-black border-2 rounded-xl hover:shadow-black shadow-lg">
        Use Existing Resources
      </button>
    </BgDiv>
  );
};

export default OptPage;

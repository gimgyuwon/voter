export const submitSurvey = async (data) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/calculate/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("서버 통신 오류");
  }

  return response.json();
};

export default submitSurvey;

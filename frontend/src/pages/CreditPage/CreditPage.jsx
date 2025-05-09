export const CreditPage = () => {
  return (
    <div className="p-6 space-y-4 text-sm text-gray-800">
      <h1 className="text-lg font-semibold">이미지 출처 및 저작권 정보</h1>
      <p>
        본 사이트에 사용된 후보자 이미지 및 정당 로고는 Wikimedia Commons에서
        가져왔으며, 일부는 편집(배경 제거 등)이 이루어졌습니다. 저작권은
        원작자에게 있으며, 공정 사용 목적에 따라 출처를 명시합니다.
      </p>

      <h2 className="font-semibold mt-4">후보자 이미지</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          이재명:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Lee_Jae_Myung_2925.jpg"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikimedia 원본 보기
          </a>
        </li>
        <li>
          김문수:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Moon_Soo_KIM.jpg"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikimedia 원본 보기
          </a>
        </li>
        <li>
          이준석:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Lee_Jun-seok%27s_Portait_(2024.11).jpg"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikimedia 원본 보기
          </a>
        </li>
        <li>
          김재연:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:%D0%9A%D0%B8%D0%BC_%D0%94%D0%B6%D1%8D_%D0%81%D0%BD.png"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikimedia 원본 보기
          </a>
        </li>
        <li>
          이낙연:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:South_Korean_Prime_Minister_Lee_-_2017_(36235112603)_(cropped).jpg"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikimedia 원본 보기
          </a>
        </li>
      </ul>

      <h2 className="font-semibold mt-6">정당 로고</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          더불어민주당:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:2024_Logo_of_the_Democratic_Party_of_Korea.svg"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikimedia 원본 보기
          </a>
        </li>
        <li>
          국민의힘:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Flag_of_People_Power_Party_of_Korea.svg"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikimedia 원본 보기
          </a>
        </li>
        <li>
          개혁신당:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Logo_of_the_New_Reform_Party_(South_Korea).svg"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikimedia 원본 보기
          </a>
        </li>
        <li>
          새미래민주당:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Korean_New_Future_Democratic_Party_typeface_logo.png"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikimedia 원본 보기
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CreditPage;

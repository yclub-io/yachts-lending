const TeamDesktop = ({ teamData }) => {
  const renderTeam = teamData.map((member, index) => (
    <>
      {member.fullName ? (
        <div
          key={index}
          className="mx-[23px] mb-[50px] flex h-[559px] w-[337px] flex-col justify-between rounded-[20px] border border-purple-1 p-5 text-center font-Grotesk"
        >
          <div>
            <div className="relative w-full">
              {member.socialNetworkLink && (
                <a href={member.socialNetworkLink} target="_blank">
                  <img
                    className="absolute top-0 right-0 w-6 hover:opacity-70"
                    src={member.socialNetworkImageSrc}
                    alt="social network"
                  />
                </a>
              )}
              <img
                className="m-auto h-[147px] w-[147px] rounded-full border border-purple-1"
                src={member.avatarSrc}
              />
            </div>

            <p className="mt-[20px] text-[24px] font-bold">{member.fullName}</p>
            <p className="mt-[5px] text-[18px] font-bold">{member.nickName}</p>
            <p className="mt-[10px] text-sm text-gray-1">{member.role}</p>

            <img
              className="mx-auto w-8 py-[10px]"
              src="/images/teamSectionInfDivider.svg"
              alt="divider"
            />

            <p className="w mx-auto text-base  text-gray-1 lg:w-[245px]">
              {member.desc}
            </p>
          </div>
          <div className="flex justify-center">
            {member.pastProjectsLogosArr &&
              member.pastProjectsLogosArr.map((logoSrc) => (
                <img
                  key={logoSrc}
                  className="mx-[10px] h-[50px] w-[50px]"
                  src={logoSrc}
                  alt={logoSrc}
                />
              ))}
          </div>
        </div>
      ) : (
        <div
          key={index}
          className="mx-[23px] mb-[50px] flex h-[559px] w-[337px] flex-col rounded-[20px] border border-purple-1 px-1 text-center font-Grotesk"
        >
          <p className="mt-[140px] text-[28px] font-bold">{member.nickName}</p>
          <p className="pt-[10px] text-sm text-gray-1">{member.role}</p>

          <img
            className="mx-auto w-8 py-[20px]"
            src="/images/teamSectionInfDivider.svg"
            alt="divider"
          ></img>

          <p className="w mx-auto pb-[60px] text-base leading-[20px] text-gray-1 lg:w-[245px]">
            {member.desc}
          </p>
        </div>
      )}
    </>
  ));

  return (
    <div className="m-auto hidden w-[1150px] flex-wrap lg:flex">
      {renderTeam}
    </div>
  );
};

export default TeamDesktop;

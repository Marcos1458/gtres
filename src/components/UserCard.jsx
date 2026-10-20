const UserCard = ({
  name,
  age,
  profession,
  avatarUrl,
  isMentor = false,
  children
}) => {
  return (
    <article className="card">
      <img src={avatarUrl} alt={'Foto de ${name}'} />
      <div className="style.avatar">
        <h2>{name}</h2>
        <p>{profession}</p>
        <p>{age} anos</p>
        {isMentor && <span>Mentor</span>}
        {children}
      </div>
    </article>
  );
};

export default UserCard;
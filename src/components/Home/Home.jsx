import s from './home.module.scss';

const Home = () => {
  return (
    <>
      <div>
        <h1 className={s.h1}>
          <em>C</em>
          <em className={`${s.planet} ${s.left}`}>O</em>
          <em>S</em>
          <em>M</em>
          <em className={`${s.planet} ${s.right}`}>O</em>
          <em>S</em>
        </h1>
      </div>
    </>
  );
};

export default Home;

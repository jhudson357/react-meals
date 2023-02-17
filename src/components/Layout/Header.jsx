import styles from "./Header.module.css"
import mealsImg from "../../assets/meals.jpg"
import HeaderCardButton from "./HeaderCartButton"

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCardButton onClick={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="Table with assortment of foods" />
      </div>
    </>
  )
}

export default Header

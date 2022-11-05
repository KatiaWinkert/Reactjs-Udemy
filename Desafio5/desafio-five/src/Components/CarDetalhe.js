import styles from './CarDetalhe.module.css';

const CarDetalhe = ({brand, km, color, i,newCar }) => {
  return (
    <div className={styles.car}>
      <h1>Detalhe de carro </h1>
      <ul>
        <li key={i}> Marca:{brand}</li>
        <li> km: {km}</li>
        <li> Cor: {color}</li>
      </ul>
      {newCar && <p>Este carro é novo</p>}
    </div>
  )
}

export default CarDetalhe
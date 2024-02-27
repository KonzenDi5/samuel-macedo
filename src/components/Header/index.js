import { Logo, Container } from "./styles"
import logoSamuel from '../../assets/logoSamuel.png'

export const Header = () => {
return(<> 
<Container>
<Logo src={logoSamuel} alt="logotipo" />
</Container>
</>)
}
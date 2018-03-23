import Typer from '@/store/typer'
import User from '../mutation.type'

export default Typer({
    mod:'System',
    parents:[User.mod],
    
    INIT_MOD : 'INIT_MOD',
    CHANGE_MOD : 'CHANGE_MOD',
})

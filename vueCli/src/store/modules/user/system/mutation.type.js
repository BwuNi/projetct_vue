import Typer from '@/store/typer'
import User from '../mutation.type'

export default Typer({
    mod:'system',
    parent:[User.mod],

    INIT : 'INIT'
})

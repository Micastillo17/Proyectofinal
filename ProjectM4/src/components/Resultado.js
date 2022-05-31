import { 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    Button } from "@mui/material"
  import PropTypes from "prop-types"
  
  const Resultado = (props) => {
    return (
      <Dialog open={props.dialogAbierto} onClose={props.cerrarDialog}>
        <DialogContent>
          <DialogContentText>{props.msg}</DialogContentText>
          <DialogActions>
            <Button color='primary' onClick={props.cerrarDialog}>
              Cerrar
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    )
  }
  
  Resultado.propTypes = {
    dialogAbierto: PropTypes.bool.isRequired,
    cerrarDialog: PropTypes.func.isRequired
  }
  
  export default Resultado
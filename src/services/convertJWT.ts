type tpResJWT ={
    id:string
}

export const convertJWT =(token:string):tpResJWT=>{
    try {
      // Extraer la segunda parte del token (el payload)
      const base64Url = token.split('.')[1];
      // Convertir base64Url a base64 y decodificar
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
  
      return JSON.parse(jsonPayload); // Convertir el payload a JSON y devolverlo
    } catch (e) {
      console.error('Error al decodificar el token JWT:', e);
      return {id:''}; // En caso de error, devolver un objeto vacio
    }
  }
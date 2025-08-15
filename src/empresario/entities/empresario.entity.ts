export class Empresario {


//metodo constructor:
//metodo que se ejecuta automaticamente 
//cuando se crea un objeto: new 
//sirve para dar valores iniciales 
//a los atributos de clase 

constructor (
     private _id  :number,
private _nombre : string,
private _apellido : string,
private _edad : number,
private _telefono: number,
private _estado: boolean,
private _correo: string,
private _contraseña: string,)
 {}

//metodos accesores:
//permiten acceder a atributos
//privados:

public get id():number{
    return this._id;
}
public get nombre():string {
    return this._nombre
}

public get apellido ():string {
    return this._apellido
}
 
public get edad ():number {
    return this._edad
}

public get telefono ():number{
    return this._telefono 
}

public get estado ():boolean{
    return this._estado 
}

public get correo ():string{
    return this._correo 
}

public get contraseña ():string{
    return this._contraseña
}


}







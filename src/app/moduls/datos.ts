export class Datos {
  constructor(
    public id: string,
    public title: string,
    public carpeta_fuente: string,
    public fecha_nota: string,
    public pagina_nota: number,
    public numero_nota: string,
    public uid: string,
    public Arc_text: string,
    public nota_txt: string,
    public ruta_nota: string,
    public altura_img_px: string,
    public ancho_img_px: string,
    public horizontal_res_dp: string,
    public vertical_res_dp: string,
    public id_tipo_medio: number,
    public altura_img_cm: number ,
    public ancho_img_cm: number,
    public area_cm2: number,
    public ancho_col_cm: number,
    public columnas: number,
    public _version_: number,

    public createdAt: any,
    public updatetAt: any
  ) { }
}

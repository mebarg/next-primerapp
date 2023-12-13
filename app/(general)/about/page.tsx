import { Metadata } from "next";

export const metadata : Metadata= {
 title: 'About Page',
 description: 'pagina con ifo de la app',
 keywords:['info', 'app' , 'about']
};



export default function AboutPage() {
  return (
    <div>
      <h1>Sobre Page</h1>
    </div>
  );
}
 
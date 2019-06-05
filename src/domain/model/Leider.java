package domain.model;

public class Leider {
    private String naam;
    private String foto;
    private String functie;

    public Leider(String naam, String foto, String functie) {
        setNaam(naam);
        setFoto(foto);
        setFunctie(functie);
    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getFunctie() {
        return functie;
    }

    public void setFunctie(String functie) {
        this.functie = functie;
    }

    @Override
    public String toString() {
        return "Leider{" +
                "naam='" + naam + '\'' +
                ", foto='" + foto + '\'' +
                ", functie='" + functie + '\'' +
                '}';
    }
}

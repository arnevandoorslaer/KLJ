package domain.model;

public class Activiteit {
    private String naam;
    private String uur;
    private String locatie;
    private String wie;
    private String extra;
    private String maand;

    public Activiteit(String naam, String uur, String locatie, String wie, String extra, String maand) {
        setNaam(naam);
        setExtra(extra);
        setLocatie(locatie);
        setUur(uur);
        setWie(wie);
        setMaand(maand);

    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public String getUur() {
        return uur;
    }

    public void setUur(String uur) {
        this.uur = uur;
    }

    public String getLocatie() {
        return locatie;
    }

    public void setLocatie(String locatie) {
        this.locatie = locatie;
    }

    public String getWie() {
        return wie;
    }

    public void setWie(String wie) {
        this.wie = wie;
    }

    public String getExtra() {
        return extra;
    }

    public void setExtra(String extra) {
        this.extra = extra;
    }

    public String getMaand() {
        return maand;
    }

    public void setMaand(String maand) {
        this.maand = maand;
    }

    @Override
    public String toString() {
        return "Activiteit{" +
                "naam='" + naam + '\'' +
                ", uur='" + uur + '\'' +
                ", locatie='" + locatie + '\'' +
                ", wie='" + wie + '\'' +
                ", extra='" + extra + '\'' +
                ", maand='" + maand + '\'' +
                '}';
    }
}

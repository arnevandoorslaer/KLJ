package domain.db;

import domain.model.Activiteit;
import java.util.ArrayList;

public class ActiviteitenDB {
    private ArrayList<Activiteit> Activiteiten;

    public ActiviteitenDB() {
        Activiteiten = new ArrayList<>();
    }

    public void addActiviteit(Activiteit Activiteit) {
        Activiteiten.add(Activiteit);
    }

    public ArrayList<Activiteit> getActiviteiten() {
        return Activiteiten;
    }

    public ArrayList<Activiteit> getActiviteitenByMaand(String maand) {
        ArrayList<Activiteit> temp = new ArrayList<>();
        for (Activiteit activiteit : Activiteiten) {
            if (activiteit.getMaand().equals(maand.toLowerCase())) {
                temp.add(activiteit);
            }
        }
        return temp;
    }

    public void fill(String filename) {
        XMLReader xmlReader = new XMLReader(filename);
        ArrayList<String> activiteitenArray = xmlReader.getXmlArray();

        for (String temp : activiteitenArray) {

            String[] activiteitArray = temp.split("TAB");
            String uur = activiteitArray[0].split(" ")[0] + " " + activiteitArray[0].split(" ")[1];
            String maand = activiteitArray[0].split(" ")[2];
            String naam = activiteitArray[1];
            String locatie = "";
            String wie = "";
            String extra = "";
            try {
                locatie = activiteitArray[2];
                wie = activiteitArray[3];
                extra = activiteitArray[4];
            } catch (IndexOutOfBoundsException e) {
                System.out.print("");
            }
            Activiteit activiteit = new Activiteit(naam, uur, locatie, wie, extra, maand);
            this.addActiviteit(activiteit);
        }
    }
}

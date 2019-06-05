package domain.db;

import domain.model.Leider;
import java.util.ArrayList;

public class LeidingDB {
    private ArrayList<Leider> leiding;

    public LeidingDB() {
        leiding = new ArrayList<>();
    }

    public void addLeider(Leider leider) {
        leiding.add(leider);
    }

    public ArrayList<Leider> getLeiding() {
        return leiding;
    }

    public ArrayList<Leider> getHulpLeiding() {
        ArrayList<Leider> temp = new ArrayList<>();
        for (Leider leider : leiding) {
            if (leider.getFunctie().equals("hulpleiding")) {
                temp.add(leider);
            }
        }
        return temp;
    }

    public ArrayList<Leider> getVasteLeiding() {
        ArrayList<Leider> temp = new ArrayList<>();
        for (Leider leider : leiding) {
            if (leider.getFunctie().equals("vasteleiding")) {
                temp.add(leider);
            }
        }
        return temp;
    }
    public void fill(String filename) {
        XMLReader xmlReader = new XMLReader(filename);
        ArrayList<String> leidingArray = xmlReader.getXmlArray();

        for (String temp : leidingArray) {
            String[] leiderArray = temp.split("TAB");
            String naam = leiderArray[0];
            String foto = leiderArray[1];
            String functie = leiderArray[2];

            Leider l = new Leider(naam, foto, functie);
            this.addLeider(l);
        }
    }
}

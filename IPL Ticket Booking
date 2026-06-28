package iplTicketBooking;
import java.util.Scanner;

class cricketMatch{		private int matchID;	private String matchName;	private String Venue;	private String Date;	private int vipseat;	private int premiumseat;	private int regularseat;	private double vipPrice;	private double premiumPrice;	private double regularPrice;		public cricketMatch (int matchID,String matchName, String Venue,String Date,int vipseat,int premiumseat,int regularseat,double vipPrice,double premiumPrice, double regularPrice)	{		super();
this.matchID= matchID;this.matchName=matchName;this.Venue= Venue;this.Date=Date;this.vipseat=vipseat;this.premiumseat=premiumseat;this.regularseat=regularseat;this.vipPrice=vipPrice;this.premiumPrice=premiumPrice;this.regularPrice=regularPrice;}	
public cricketMatch() {		// TODO Auto-generated constructor stub	}

public int getMatchID() {		return matchID;	}
	public void setMatchID(int matchID) {		this.matchID = matchID;	}
	public String getMatchName() {		return matchName;	}

	public void setMatchName(String matchName) {		this.matchName = matchName;	}
	public String getVenue() {		return Venue;	}
	public void setVenue(String venue) {		Venue = venue;	}
	public String getDate() {		return Date;	}
	public void setDate(String date) {		Date = date;	}

	public int getVipseat() {		return vipseat;	}

public void setVipseat(int vipseat) {		this.vipseat = vipseat;	}
	public int getPremiumseat() {		return premiumseat;	}

public void setPremiumseat(int premiumseat) {		this.premiumseat = premiumseat;	}

	public int getRegularseat() {		return regularseat;	}
	public void setRegularseat(int regularseat) {		this.regularseat = regularseat;	}
	public double getVipPrice() {		return vipPrice;	}
	public void setVipPrice(double vipPrice) {		this.vipPrice = vipPrice;	}
	public double getPremiumPrice() {		return premiumPrice;	}
public void setPremiumPrice(double premiumPrice) {		this.premiumPrice = premiumPrice;	}
	public double getRegularPrice() {		return regularPrice;	}

public void setRegularPrice(double regularPrice) {		this.regularPrice = regularPrice;	}
void displayMatchDetails() {	System.out.println("\n---IPLMatch Details--");	System.out.println("Match: " +matchName);	System.out.println("Venue: "+Venue);	System.out.println("Date: "+Date);	System.out.println("Available booking type| VIP seats: " +vipseat+ "|Premium seats: "+premiumseat+ "|Regular Seats: "+regularseat); System.out.println("VIP ticket price: "+vipPrice); System.out.println("Premium ticket price: "+premiumPrice); System.out.println("Regular ticket price: "+regularPrice);

}//Ticket booking
void bookingTickets(Scanner sc ) {	int choice;		do {		System.out.println("\n**IPL Ticket booking system**");		System.out.println("1.View Match Details");		System.out.println("2. VIP Tickets");		System.out.println("3. Premium Tickets");		System.out.println("4.Regular Tickets");		System.out.println("5.Exit");		System.out.println("Enter your choice: ");		choice= sc.nextInt();		switch(choice) {		case 1:		displayMatchDetails();		break;		case 2: 			book(sc, "VIP");		break;			case 3:		book (sc, "PREMIUM");		break;				case 4:		book (sc, "REGULAR");		break;			case 5:		System.out.println("Exiting..");		break;			default:			System.out.println ("Invalid choice! Please try again.");			return;				}			} while (choice != 4);		System.out.println("**Thank you for choosing IPL Ticket booking application.**");
}	



public void book(Scanner sc, String type) {	System.out.println(" Enter number of tickets: ");	int quantity= sc.nextInt();	 double totalPrice= 0; switch (type) {
 case "VIP": if (quantity <= vipseat) { vipseat -= quantity; totalPrice = quantity * vipPrice;			System.out.println("VIP tickets booked for " + quantity + " And the total amount is: " +totalPrice);		 System.out.println("Available seats: " +vipseat);return;} else { System.out.println(" Only " + vipseat + " VIP seats available."); } break;
 case "PREMIUM": if (quantity <= premiumseat) { premiumseat -= quantity; totalPrice = quantity * premiumPrice;			System.out.println("Premium tickets booked for " + quantity + " And the total amount is: " +totalPrice);		 System.out.println("Available seats: " +premiumseat);		 return; } else { System.out.println(" Only " + premiumseat + " Premium seats available."); } break; case "REGULAR": if (quantity <= regularseat) { regularseat -= quantity; totalPrice = quantity * regularPrice;			System.out.println("Regular tickets booked for " + quantity + " And the total amount is: " +totalPrice);		 System.out.println("Available seats: " +premiumseat);		 return; } else { System.out.println(" Only " + regularseat + " Regular seats available."); } break; }}




public class iplTicketBooking {
	public static void main(String[] args) {		// TODO Auto-generated method stub					Scanner sc=new Scanner(System.in);						cricketMatch m= new cricketMatch (111,"RCB Vs GT", "Chinnaswamy Stadium Bangalore","24 APR 2026", 1000, 1500, 3000, 25000, 20000, 5000 );			//m.displayMatchDetails();			m.bookingTickets(sc);					sc.close();							}}


}



On Mon, Apr 20, 2026 at 5:26 PM Susmita Biswas <susmitab277@gmail.com> wrote:
package iplTicketBooking;
import java.util.Scanner;

class cricketMatch{		private int matchID;	private String matchName;	private String Venue;	private String Date;	private int vipseat;	private int premiumseat;	private int regularseat;	private double vipPrice;	private double premiumPrice;	private double regularPrice;		public cricketMatch (int matchID,String matchName, String Venue,String Date,int vipseat,int premiumseat,int regularseat,double vipPrice,double premiumPrice, double regularPrice)	{		super();
this.matchID= matchID;this.matchName=matchName;this.Venue= Venue;this.Date=Date;this.vipseat=vipseat;this.premiumseat=premiumseat;this.regularseat=regularseat;this.vipPrice=vipPrice;this.premiumPrice=premiumPrice;this.regularPrice=regularPrice;}	
public cricketMatch() {		// TODO Auto-generated constructor stub	}

public int getMatchID() {		return matchID;	}
	public void setMatchID(int matchID) {		this.matchID = matchID;	}
	public String getMatchName() {		return matchName;	}

	public void setMatchName(String matchName) {		this.matchName = matchName;	}
	public String getVenue() {		return Venue;	}
	public void setVenue(String venue) {		Venue = venue;	}
	public String getDate() {		return Date;	}
	public void setDate(String date) {		Date = date;	}

	public int getVipseat() {		return vipseat;	}

public void setVipseat(int vipseat) {		this.vipseat = vipseat;	}
	public int getPremiumseat() {		return premiumseat;	}

public void setPremiumseat(int premiumseat) {		this.premiumseat = premiumseat;	}

	public int getRegularseat() {		return regularseat;	}
	public void setRegularseat(int regularseat) {		this.regularseat = regularseat;	}
	public double getVipPrice() {		return vipPrice;	}
	public void setVipPrice(double vipPrice) {		this.vipPrice = vipPrice;	}
	public double getPremiumPrice() {		return premiumPrice;	}
public void setPremiumPrice(double premiumPrice) {		this.premiumPrice = premiumPrice;	}
	public double getRegularPrice() {		return regularPrice;	}

public void setRegularPrice(double regularPrice) {		this.regularPrice = regularPrice;	}
void displayMatchDetails() {	System.out.println("\n---IPLMatch Details--");	System.out.println("Match: " +matchName);	System.out.println("Venue: "+Venue);	System.out.println("Date: "+Date);	System.out.println("Available booking type| VIP seats: " +vipseat+ "|Premium seats: "+premiumseat+ "|Regular Seats: "+regularseat); System.out.println("VIP ticket price: "+vipPrice); System.out.println("Premium ticket price: "+premiumPrice); System.out.println("Regular ticket price: "+regularPrice);

}//Ticket booking
void bookingTickets(Scanner sc ) {	int choice;		do {		System.out.println("\n**IPL Ticket booking system**");		System.out.println("1.View Match Details");		System.out.println("2. VIP Tickets");		System.out.println("3. Premium Tickets");		System.out.println("4.Regular Tickets");		System.out.println("5.Exit");		System.out.println("Enter your choice: ");		choice= sc.nextInt();		switch(choice) {		case 1:		displayMatchDetails();		break;		case 2: 			book(sc, "VIP");		break;			case 3:		book (sc, "PREMIUM");		break;				case 4:		book (sc, "REGULAR");		break;			case 5:		System.out.println("**Booking Complete.Thank you for choosing IPL Ticket booking application.**");		break;				default:			System.out.println ("Invalid choice! Please try again.");			return;				}			} while (choice != 5);}	



public void book(Scanner sc, String type) {	System.out.println(" Enter number of tickets: ");	int quantity= sc.nextInt();	 double totalPrice= 0; switch (type) {
 case "VIP": if (quantity <= vipseat) { vipseat -= quantity; totalPrice = quantity * vipPrice;			System.out.println("VIP tickets booked for " + quantity + " And the total amount is: " +totalPrice);		 System.out.println("Available seats: " +vipseat);return;} else { System.out.println(" Only " + vipseat + " VIP seats available."); } break;
 case "PREMIUM": if (quantity <= premiumseat) { premiumseat -= quantity; totalPrice = quantity * premiumPrice;			System.out.println("Premium tickets booked for " + quantity + " And the total amount is: " +totalPrice);		 System.out.println("Available seats: " +premiumseat);		 return; } else { System.out.println(" Only " + premiumseat + " Premium seats available."); } break; case "REGULAR": if (quantity <= regularseat) { regularseat -= quantity; totalPrice = quantity * regularPrice;			System.out.println("Regular tickets booked for " + quantity + " And the total amount is: " +totalPrice);		 System.out.println("Available seats: " +premiumseat);		 return; } else { System.out.println(" Only " + regularseat + " Regular seats available."); } break; }}




public class iplTicketBooking {
	public static void main(String[] args) {		// TODO Auto-generated method stub					Scanner sc=new Scanner(System.in);						cricketMatch m= new cricketMatch (111,"RCB Vs GT", "Chinnaswamy Stadium Bangalore","24 APR 2026", 1000, 1500, 3000, 25000, 20000, 5000 );			//m.displayMatchDetails();			m.bookingTickets(sc);					sc.close();							}}


}

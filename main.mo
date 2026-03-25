import Principal "mo:core/Principal";
import Text "mo:core/Text";
import List "mo:core/List";
import Time "mo:core/Time";

actor {
  type Inquiry = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type Order = {
    customerName : Text;
    phone : Text;
    fruit : Text;
    quantityDozens : Nat;
    address : Text;
    timestamp : Time.Time;
  };

  let inquiries = List.empty<Inquiry>();
  let orders = List.empty<Order>();

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async () {
    let newInquiry : Inquiry = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    inquiries.add(newInquiry);
  };

  public shared ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.toArray();
  };

  public shared ({ caller }) func submitOrder(customerName : Text, phone : Text, fruit : Text, quantityDozens : Nat, address : Text) : async () {
    let newOrder : Order = {
      customerName;
      phone;
      fruit;
      quantityDozens;
      address;
      timestamp = Time.now();
    };
    orders.add(newOrder);
  };

  public shared ({ caller }) func getAllOrders() : async [Order] {
    orders.toArray();
  };
};

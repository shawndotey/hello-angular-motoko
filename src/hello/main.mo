import AssocList "mo:base/AssocList";
import List "mo:base/List";
import Text "mo:base/Text";

actor {
  public query func greet() : async Text {
    return "hello from IC main";
  };
  public query func test() : async Text {
    return "test from IC main";
  };
};

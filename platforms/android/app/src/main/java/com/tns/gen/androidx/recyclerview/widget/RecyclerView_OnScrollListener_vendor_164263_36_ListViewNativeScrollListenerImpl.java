/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.androidx.recyclerview.widget;

public class RecyclerView_OnScrollListener_vendor_164263_36_ListViewNativeScrollListenerImpl
    extends androidx.recyclerview.widget.RecyclerView.OnScrollListener
    implements com.tns.NativeScriptHashCodeProvider {
  public RecyclerView_OnScrollListener_vendor_164263_36_ListViewNativeScrollListenerImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onScrollStateChanged(androidx.recyclerview.widget.RecyclerView param_0, int param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onScrollStateChanged", void.class, args);
  }

  public void onScrolled(
      androidx.recyclerview.widget.RecyclerView param_0, int param_1, int param_2) {
    java.lang.Object[] args = new java.lang.Object[3];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    com.tns.Runtime.callJSMethod(this, "onScrolled", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}

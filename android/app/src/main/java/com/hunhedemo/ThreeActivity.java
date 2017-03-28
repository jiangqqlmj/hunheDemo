package com.hunhedemo;

import android.app.Activity;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

/**
 * 通过JS进行打开Activity，当该Activity关闭的时候，会回调传输数据给之前的Activity
 */
public class ThreeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_three);
        Button btn_huidiao=(Button)this.findViewById(R.id.btn_huidiao);
        btn_huidiao.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mIntent=new Intent();
                mIntent.putExtra("three_result","From Activity的数据回调过来啦~");
                ThreeActivity.this.setResult(Activity.RESULT_OK,mIntent);
                ThreeActivity.this.finish();
            }
        });
    }
}

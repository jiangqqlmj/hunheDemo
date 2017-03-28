package com.hunhedemo;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

/**
 * 原生 欢迎界面
 */
public class WelcomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);
        Button btn_welcome=(Button)this.findViewById(R.id.btn_welcome);
        btn_welcome.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mIntent=new Intent(WelcomeActivity.this,MainActivity.class);
                WelcomeActivity.this.startActivity(mIntent);
            }
        });
    }
}

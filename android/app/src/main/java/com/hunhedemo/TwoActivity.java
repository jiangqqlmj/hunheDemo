package com.hunhedemo;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

public class TwoActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_two);
        Intent mIntent=getIntent();
        if(mIntent!=null) {
            Log.d("zttjiangqq", "从JS传过来的数据为:" + mIntent.getStringExtra("params"));
        }
        Button btn_two=(Button)this.findViewById(R.id.btn_two);
        btn_two.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mIntent=new Intent(TwoActivity.this,MainActivity.class);
                mIntent.putExtra("data","传入JS中的数据...123");
                TwoActivity.this.startActivity(mIntent);
            }
        });
    }
}
